import{r as f,R as e}from"./iframe-BpT5bjyP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bw_20RiP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-6ZjUmd8N.js";import{C as k}from"./ComposedChart-VG8L4Dm0.js";import{X as K}from"./XAxis-D1H3iiMu.js";import{L as v}from"./Legend-Ba6tYrFU.js";import{B as s}from"./Bar-Cy-Oq5wl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BW7muwsN.js";import"./Text-HFJbCo1I.js";import"./resolveDefaultProps-DDabcDAr.js";import"./DOMUtils-DLC4sCDo.js";import"./isWellBehavedNumber-C47drcC6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BeMfDg3A.js";import"./index-D8dxtA6W.js";import"./index-BdWqmQ-h.js";import"./RechartsWrapper-CU2X_CAJ.js";import"./index-DEeMmmG_.js";import"./index-rBmp_rAe.js";import"./throttle-DrtrRvnQ.js";import"./renderedTicksSlice-DruWQWhq.js";import"./axisSelectors-DSgRntKH.js";import"./d3-scale-CxG8NgTa.js";import"./CartesianAxis-3XWkAM0R.js";import"./Layer-JsFzk0bC.js";import"./types-TjqF4iRF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BtlbTq9b.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BHxGC6l9.js";import"./chartDataContext-vyuuOWQ4.js";import"./CategoricalChart-B5HQoLMh.js";import"./Symbols-DdG4jW4z.js";import"./symbol-BbcEI7QM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cr8-5ClZ.js";import"./uniqBy-B00lS2JO.js";import"./iteratee-DXhAWmJ8.js";import"./tooltipContext-uDZYFT-L.js";import"./AnimatedItems-CJc5QMM0.js";import"./useAnimationId-C2b5i1-K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CHZg89XO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtBl96a6.js";import"./RegisterGraphicalItemId-rnVsHys1.js";import"./ErrorBarContext-DwESbJwv.js";import"./GraphicalItemClipPath-B_g_u1qL.js";import"./SetGraphicalItem-Bi4oedQq.js";import"./getZIndexFromUnknown-CQrw8Qh5.js";import"./graphicalItemSelectors-eSkf4DNa.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
