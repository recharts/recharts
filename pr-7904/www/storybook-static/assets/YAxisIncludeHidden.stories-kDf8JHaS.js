import{r as f,R as e}from"./iframe-DeP4Wy7i.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Blw3_-Cc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-nnPIR1gF.js";import{C as k}from"./ComposedChart-CJez4X5P.js";import{X as K}from"./XAxis-D55ujQEE.js";import{L as v}from"./Legend-Wsna19w5.js";import{B as a}from"./Bar-BfVBLuag.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BDn5In4u.js";import"./Text-tlJnHXas.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./DOMUtils-fGj0XAk5.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-46z2Emao.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./RechartsWrapper-CSrF3qvK.js";import"./axisSelectors-CZy9dm6d.js";import"./throttle-meF8BPI2.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./CartesianAxis-CZDdo6k-.js";import"./Layer-CBmTHU88.js";import"./types-CanfrVuk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./Symbols-Bx3k4bkK.js";import"./symbol-CoUfccn9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWI8BIOr.js";import"./uniqBy-Dv4DpKxP.js";import"./iteratee-CkWGGgWz.js";import"./AnimatedItems-XIng_I1E.js";import"./useAnimationId-BrY9w4yL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-fbRf2OP7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DbA45Jz_.js";import"./tooltipContext-BSjqdD-N.js";import"./RegisterGraphicalItemId-C2Pze7xm.js";import"./ErrorBarContext-kXoA89OY.js";import"./GraphicalItemClipPath-F-rOP2Wx.js";import"./SetGraphicalItem-Bb8kLJya.js";import"./getZIndexFromUnknown-C4tnrzQ2.js";import"./useGraphicalItemIdentity-DO54SzyN.js";import"./dataEntryStyles-BtAHIiKD.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
