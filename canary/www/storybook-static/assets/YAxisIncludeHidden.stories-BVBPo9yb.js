import{r as f,R as e}from"./iframe-DWt4J3JN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CsFlwLse.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-NSNONz_v.js";import{C as k}from"./ComposedChart-Dnd49qHa.js";import{X as K}from"./XAxis-Ct82dr0g.js";import{L as v}from"./Legend-BmihlOrm.js";import{B as a}from"./Bar-DuIaNWpW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bkb0GMep.js";import"./Text-BH_q_eI2.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./throttle-Dk5xsQjg.js";import"./axisSelectors-BS7avNJg.js";import"./d3-scale-BC5jrybd.js";import"./CartesianAxis-Ch6tESXa.js";import"./Layer-D1fzjsCN.js";import"./types-BbXG2_az.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-COqAJslP.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./Symbols-DwZTYmJ_.js";import"./symbol-DVO5NwTU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BsiXtm6U.js";import"./uniqBy-DSjR0NWH.js";import"./iteratee-BZC7KUwZ.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DCtJIAIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cd9oJYQg.js";import"./useAnimationId-DaySoH3H.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BICHaO6W.js";import"./tooltipContext-CvdBWgjK.js";import"./dataEntryStyles-CMWxjrvv.js";import"./ErrorBarContext-D_UxjrQr.js";import"./activeStyles-DEL6Q9xK.js";import"./SetGraphicalItem-cSBJzNh5.js";import"./getZIndexFromUnknown-D9w36Eih.js";import"./useEffectiveDataKey---V5hCOC.js";import"./omit-D9RVYgBg.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
