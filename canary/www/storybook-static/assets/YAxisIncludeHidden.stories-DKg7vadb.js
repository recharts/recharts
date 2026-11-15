import{r as f,R as e}from"./iframe-c26JqrsL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BMAl-ilQ.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BkUYlJsZ.js";import{C as k}from"./ComposedChart-CWYwg474.js";import{X as K}from"./XAxis-DutmNx-o.js";import{L as v}from"./Legend-B8n_PKuf.js";import{B as a}from"./Bar-BGzbbbjV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-U_zx5ZhA.js";import"./Text-DrKUoP8L.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./ZIndexLayer-B-r7bl4K.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-NvwmetH_.js";import"./throttle-B2IvKwW-.js";import"./axisSelectors-Dy58hWsd.js";import"./d3-scale-DWhFNlvg.js";import"./CartesianAxis-CwL4X3Li.js";import"./Layer-vJvTy9Ku.js";import"./types-BkHyLjnw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-NUuyBQzn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C6L3NnBU.js";import"./useAnimationId-s58nu9Pz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./tooltipContext-6Dtp9k6E.js";import"./ErrorBarContext-Cck_FQwt.js";import"./activeStyles-CxWIOF49.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getZIndexFromUnknown-BdHfMcqR.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./omit-Cq0l5oTr.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
