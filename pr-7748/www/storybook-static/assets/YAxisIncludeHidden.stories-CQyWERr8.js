import{r as f,R as e}from"./iframe-SOI7ETqc.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Du2dgY78.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BU6oUWx4.js";import{C as k}from"./ComposedChart-CZsCC2GL.js";import{X as K}from"./XAxis-gIhRIlH1.js";import{L as v}from"./Legend-V_mjAzcs.js";import{B as a}from"./Bar-C9ihTEjc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-_MgncHEc.js";import"./Text-CVVDOvxk.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./ZIndexLayer-uSStm6JU.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C18_Wica.js";import"./throttle-BuYpA644.js";import"./axisSelectors-DhazdA5O.js";import"./d3-scale-3TBblIj9.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-2ihhOObz.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DtBbnSGS.js";import"./uniqBy-C8wr_V1k.js";import"./iteratee-BgCV5Vfx.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKn3hEIk.js";import"./useAnimationId-C4SjfD_p.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./tooltipContext-Cq5r6BX8.js";import"./ErrorBarContext-DHxWeWr-.js";import"./activeStyles--vF_fmID.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./getZIndexFromUnknown-CXowfawV.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./omit-eSH-Qxde.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
