import{r as f,e}from"./iframe-Dh_IuGPW.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-FBaKUNO9.js";import{R as C}from"./arrayEqualityCheck-7YZsQ9Yt.js";import{C as K}from"./ComposedChart-BT1Cqczr.js";import{X as A}from"./XAxis-BVn7zGv-.js";import{L as v}from"./Legend-sGrsloJr.js";import{B as a}from"./Bar-CUQ38gs9.js";import{R as x}from"./RechartsHookInspector--VVdTSeU.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-tTgU6cCH.js";import"./CartesianAxis-LyuwKeVQ.js";import"./Layer-0hKCd9Go.js";import"./Text-5FWhTZND.js";import"./DOMUtils-1CpgM-hP.js";import"./Label-CwPC6lqR.js";import"./PolarUtils-ByAhdJKw.js";import"./ZIndexLayer-DgCIyG2A.js";import"./zIndexSlice-Bln6WQdm.js";import"./types-C1SnlukV.js";import"./hooks-D1sh8Xam.js";import"./axisSelectors-D1G3YuQl.js";import"./RechartsWrapper-Bf-DnYOw.js";import"./CartesianChart-DmznhiBw.js";import"./chartDataContext-B9etQFAj.js";import"./CategoricalChart-DXWZuSB1.js";import"./Symbols-JLtyUHl6.js";import"./Curve-et2ZIOkM.js";import"./useElementOffset-BKWIuYmf.js";import"./iteratee-WBVmOS_2.js";import"./tooltipContext-17lE_Hlo.js";import"./ReactUtils-CN6AvFkh.js";import"./ActiveShapeUtils-DNzZoZ6X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DAYNTDZ7.js";import"./useAnimationId-DFnSrzQe.js";import"./Trapezoid-Dv67nGF9.js";import"./Sector-D9tond7R.js";import"./RegisterGraphicalItemId-C5qI6NMo.js";import"./ErrorBarContext-8rW3rtTK.js";import"./GraphicalItemClipPath-DVZrGS-c.js";import"./SetGraphicalItem-l88fIsgf.js";import"./getZIndexFromUnknown-DOBPS2hI.js";import"./graphicalItemSelectors-DeRV2J7H.js";import"./index-DsFYMPMW.js";import"./ChartSizeDimensions-qNhWq2Xl.js";import"./OffsetShower-DaKIwyBr.js";import"./PlotAreaShower-xnDTqs4e.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
