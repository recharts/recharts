import{r as f,R as e}from"./iframe-9izd3D9f.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DDd0ZoO9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-j8GW4H6F.js";import{C as k}from"./ComposedChart-CUUhu7OO.js";import{X as K}from"./XAxis--s8YS1Wl.js";import{L as v}from"./Legend-DQ3IX6XL.js";import{B as s}from"./Bar-BgyD3TSL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C-mmkXWm.js";import"./Layer-CGfY9rzU.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./Label-DH_iQkHv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbN30hBP.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./types-DZJVpBfQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./throttle-Dy12ptOd.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./axisSelectors-C_YuJB8n.js";import"./d3-scale-592QtAt9.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./Symbols-CtJwUDWI.js";import"./symbol-EUEOF-dN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkW_M-s3.js";import"./uniqBy-BUkiiJvI.js";import"./iteratee-BCGyVx9n.js";import"./tooltipContext-8-j-pmHM.js";import"./AnimatedItems-BaOOJr-i.js";import"./useAnimationId-DwScawE-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFwhI2o-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./ErrorBarContext-BIj0xSPV.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getZIndexFromUnknown-CxPEdDy6.js";import"./graphicalItemSelectors-CV94R21c.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
