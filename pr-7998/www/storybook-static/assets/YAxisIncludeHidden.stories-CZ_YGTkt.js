import{r as f,R as e}from"./iframe--2AVw2Ig.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B_xGwaHy.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DY-KmnMj.js";import{C as k}from"./ComposedChart-DU0EoCKc.js";import{X as K}from"./XAxis-DR36Dp_O.js";import{L as v}from"./Legend-DYM93m9A.js";import{B as a}from"./Bar-BDsE2Mn8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DUHcPYlD.js";import"./Text-Hvkjn3b4.js";import"./resolveDefaultProps-B29QL1c4.js";import"./pageBackground-DkdcD7r5.js";import"./isWellBehavedNumber-BCwXwBOh.js";import"./useId-CUoDw_aI.js";import"./useBackwardsCompatibleTheme-CKvuuYac.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-KCSLP8mG.js";import"./index-rGVVlfKz.js";import"./index-CbZkT_u5.js";import"./axisSelectors-CDUrw1Me.js";import"./throttle-BaGyyE0T.js";import"./d3-scale-CuVmq_8Z.js";import"./CartesianAxis-khS1fmQe.js";import"./Layer-eIGZDbY8.js";import"./types-DZjr1JEr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ViCmPO8v.js";import"./index-BTmio8NJ.js";import"./index-_nleLnFM.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-EJRMqcbQ.js";import"./index-DVblcXeN.js";import"./CartesianChart-DwfabjuB.js";import"./chartDataContext-BsjWdA7j.js";import"./CategoricalChart-D1mzQ8Dl.js";import"./Symbols-DZkC9C8i.js";import"./symbol-4r17nwA_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3tMcbQq.js";import"./uniqBy-BT1kOl9J.js";import"./iteratee-BUnf2Li6.js";import"./activeStyles-CzHB9dwV.js";import"./useAnimationId-CHJ3Zhtv.js";import"./dataEntryStyles-DeEjeZX4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQO9mUlA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cos36bQq.js";import"./tooltipContext-CYIEGwaO.js";import"./ErrorBarContext-CPUPPNIF.js";import"./GraphicalItemClipPath-DBN3vY8J.js";import"./SetGraphicalItem-CFoIf7JL.js";import"./getZIndexFromUnknown-30UZOBzt.js";import"./useEffectiveDataKey-mwtlbWZk.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
