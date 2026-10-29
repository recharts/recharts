import{r as f,R as e}from"./iframe-BfuPA7Y7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BrNvBbuM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B6sU7Rt1.js";import{C as k}from"./ComposedChart-CsUG1xb5.js";import{X as K}from"./XAxis-18ahIu4N.js";import{L as v}from"./Legend-BzsVMsZC.js";import{B as a}from"./Bar-Dl8YlR6L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B5k-U_Yi.js";import"./Text-WUFue0UU.js";import"./resolveDefaultProps-SE0EJZ_b.js";import"./DOMUtils-C1ieIiQg.js";import"./ZIndexLayer-CSVoTSBk.js";import"./index-PwnnJGIT.js";import"./index-pibBQJc_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CWu_M8g7.js";import"./throttle-Dc8hP4d4.js";import"./axisSelectors-Br11nK0T.js";import"./d3-scale-CjK5ImOh.js";import"./CartesianAxis-BUa2DE6b.js";import"./Layer-BWWgf-oi.js";import"./types-Di4mZIQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bz-0OqRl.js";import"./index-DdvOS-Rc.js";import"./index-WmIsGj85.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-95Yf8UFb.js";import"./index-Bw4IjVJv.js";import"./fillDefinitions-BUo8WQ2M.js";import"./CartesianChart-Dt3os4bo.js";import"./ZIndexPortal-Bjqq_-_3.js";import"./CategoricalChart-BbC6nel8.js";import"./Symbols-pnM7tnEZ.js";import"./symbol-DyOhgHTf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXmUTCN6.js";import"./uniqBy-7WBcglc1.js";import"./iteratee-BCwjEBWk.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DuFHEtzk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wfSbP1Fu.js";import"./useAnimationId-4ywEr4SP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJYZSdch.js";import"./tooltipContext-D0WwmcJ9.js";import"./dataEntryStyles-DawwN3gr.js";import"./ErrorBarContext-DQS0aRku.js";import"./activeStyles-fOeMVdxf.js";import"./SetGraphicalItem-B3dBsQBy.js";import"./getZIndexFromUnknown-CE8Y5Jym.js";import"./useEffectiveDataKey-Chd7xyV4.js";import"./omit-fAstOSNj.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
