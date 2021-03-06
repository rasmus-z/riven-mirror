<template>
  <div class="other-info">
    <section class="weapon">
      <header>{{ $t(build.weapon.id) }}</header>
      <div class="links">
        <a :href="weaponWiki" target="_blank" rel="noopener noreferrer">
          <el-button size="mini" type="info" icon="el-icon-location">
            {{ $t("otherinfo.wiki") }}
          </el-button>
        </a>
        <a v-if="weaponWikiEn !== weaponWiki" :href="weaponWikiEn" target="_blank" rel="noopener noreferrer">
          <el-button size="mini" type="info" icon="el-icon-location">
            {{ $t("otherinfo.wikien") }}
          </el-button>
        </a>
        <a :href="weaponWM" target="_blank" rel="noopener noreferrer">
          <el-button size="mini" type="info" icon="el-icon-goods">
            {{ $t("otherinfo.wm") }}
          </el-button>
        </a>
        <div class="wikitmpl">
          <CopyText :text="`\{\{Weapon|${build.weapon.name}\}\}`" size="mini" />
        </div>
      </div>
    </section>
    <section class="mod" v-for="(mod, i) in mods" :key="i">
      <header>{{ mod.name }}</header>
      <div class="links">
        <a :href="mod.wiki" target="_blank" rel="noopener noreferrer">
          <el-button size="mini" type="info" icon="el-icon-location">
            {{ $t("otherinfo.wiki") }}
          </el-button>
        </a>
        <a :href="mod.wm" target="_blank" rel="noopener noreferrer">
          <el-button size="mini" type="info" icon="el-icon-goods">
            {{ $t("otherinfo.wm") }}
          </el-button>
        </a>
        <div class="wikitmpl">
          <CopyText :text="`\{\{M|${mod.id}\}\}`" size="mini" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { kebabCase } from "lodash-es";
import { Vue, Component, Prop } from "vue-property-decorator";
import { ModBuild } from "@/warframe/modbuild";
import CopyText from "@/components/CopyText.vue";

@Component({ components: { CopyText } })
export default class OtherInfoDisplay extends Vue {
  @Prop() build: ModBuild;

  get weaponWiki() {
    return this.$t("otherinfo.wikiurl", [this.build.weapon.url]);
  }
  get weaponWikiEn() {
    return this.$t("otherinfo.wikiurlen", [this.build.weapon.url]);
  }
  get weaponWM() {
    return "https://warframe.market/items/" + this.build.weapon.wmurl;
  }

  get mods() {
    return this.build.mods.filter(Boolean).map(v => ({
      id: v.id,
      name: v.name,
      wiki: this.$t("otherinfo.wikiurl", [v.id.replace(/ /g, "_")]),
      wm: "https://warframe.market/items/" + kebabCase(v.id).replace(/-/g, "_"),
    }));
  }
}
</script>
<style lang="less">
@import "../less/common.less";
.other-info {
  a {
    color: @theme_main;
  }
  section > header {
    line-height: 2;
    font-size: 1.2rem;
  }
  .links > *:not(:last-child) {
    margin-right: 8px;
  }
  .wikitmpl {
    display: inline-block;
    width: 280px;
  }
}
</style>
