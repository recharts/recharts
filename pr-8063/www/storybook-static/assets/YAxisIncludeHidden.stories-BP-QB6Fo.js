import{r as f,R as e}from"./iframe-ByLAgMyT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-VAKOhZSF.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DbH_vqN6.js";import{C as k}from"./ComposedChart-CZJUN3bH.js";import{X as K}from"./XAxis-6YbWYxrg.js";import{L as v}from"./Legend-DXEOnPpR.js";import{B as a}from"./Bar-D4ausQjj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DiFVkyKf.js";import"./Text-K2cZEaeG.js";import"./resolveDefaultProps-ZOEnIxye.js";import"./pageBackground-CJjC7Pe6.js";import"./isWellBehavedNumber-ib3lWxb6.js";import"./useId-N2SJ_s2K.js";import"./useBackwardsCompatibleTheme-CAGUGjI_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J8gq1KPk.js";import"./index-Bd0XDIKz.js";import"./index-DQDYz7Kn.js";import"./axisSelectors-1NzaQeZW.js";import"./throttle-CEah83BE.js";import"./d3-scale-C7CraIkv.js";import"./CartesianAxis-CuUPXULq.js";import"./Layer-g3XAbIKO.js";import"./types-B5PcYGv_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Rz2ip3G5.js";import"./index-BzVpSiBS.js";import"./index-Dm91Zbdm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-8hL2knQK.js";import"./index-DiiEfgcg.js";import"./CartesianChart-CKytCKi1.js";import"./chartDataContext-xQwTU35T.js";import"./CategoricalChart-CKR8_K54.js";import"./Symbols-BQkxcmQZ.js";import"./symbol-Bz2OujGP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uQmAL4tB.js";import"./uniqBy-Bt5JPp1g.js";import"./iteratee-CZLX0qdh.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-Dj4g-rEk.js";import"./useAnimationId-CBnq7Z5z.js";import"./dataEntryStyles-Cy26GKXH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzITLvl8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4wijBbi.js";import"./tooltipContext-DuHQZm4D.js";import"./ErrorBarContext-CBilAMI3.js";import"./GraphicalItemClipPath-Bv7X_kga.js";import"./SetGraphicalItem-BhbU4A3u.js";import"./getZIndexFromUnknown-C5I6QwMC.js";import"./useEffectiveDataKey-DILJl117.js";import"./omit-U1v7Dk7_.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
