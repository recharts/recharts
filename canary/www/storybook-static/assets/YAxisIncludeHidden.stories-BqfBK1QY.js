import{r as f,e}from"./iframe-Dh5fYf52.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CNrfi_Sb.js";import{Y as c}from"./YAxis-Dit0gXUW.js";import{R as A}from"./arrayEqualityCheck-y3xWNCWZ.js";import{C}from"./ComposedChart-DvBGIcj2.js";import{X as K}from"./XAxis-B4KbS6If.js";import{L as v}from"./Legend-BXP3HtY4.js";import{B as a}from"./Bar-Blrs8c1W.js";import{R as x}from"./RechartsHookInspector-ClQgWiSn.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./CartesianAxis-DxoskIqi.js";import"./Layer-CyyRPVZz.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./Label-BgIRNGCU.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-Chf-nD0r.js";import"./zIndexSlice-DOeznw_J.js";import"./types-BQGztJ7o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./RechartsWrapper-B9qWPH0f.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./Symbols-CE_RrRcr.js";import"./Curve-BtY66874.js";import"./useElementOffset-ByMR83Id.js";import"./iteratee-CVT0hwhC.js";import"./tooltipContext-3_OhKDI6.js";import"./ReactUtils-DdUIndVV.js";import"./ActiveShapeUtils-vg5OHeFZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CNvS8JgY.js";import"./useAnimationId-hVsf5NM-.js";import"./Trapezoid-B-DbXUKn.js";import"./Sector-Boq0fYwI.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./ErrorBarContext-CiVkLetL.js";import"./GraphicalItemClipPath-Cuekam0c.js";import"./SetGraphicalItem-DoysDgrz.js";import"./getZIndexFromUnknown-CYjPHDjm.js";import"./graphicalItemSelectors-B7G_vDQd.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
