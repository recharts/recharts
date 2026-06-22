import{r as f,R as e}from"./iframe-BaabCOfo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-q_zljZs-.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CWxxXgIH.js";import{C as k}from"./ComposedChart-D9WOh2Dq.js";import{X as K}from"./XAxis-BXlMIHd8.js";import{L as v}from"./Legend-Bbr4IjRc.js";import{B as s}from"./Bar-ZE5AQD0g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C9kPOoUz.js";import"./CartesianAxis-DzzVwONF.js";import"./Layer-64CGscPm.js";import"./resolveDefaultProps-m6H7CCvK.js";import"./Text-BmSZi3Hk.js";import"./DOMUtils-CUUTvSW3.js";import"./isWellBehavedNumber-B34pSeK5.js";import"./Label-C7hyOp5H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qDXxNkeJ.js";import"./index-B1UijuQJ.js";import"./index-vSeH92Tc.js";import"./types-hBJB7bDz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qKkoa7Pp.js";import"./immer-BLHHDgig.js";import"./RechartsWrapper-BzVbI7QS.js";import"./index-DXTcRTSc.js";import"./index-CADxnCms.js";import"./axisSelectors-BaT59QoB.js";import"./d3-scale-xd-t_SLV.js";import"./CartesianChart-C9YeuOyj.js";import"./chartDataContext-DaAkZdG0.js";import"./CategoricalChart-_HoXNLFS.js";import"./Symbols-I2hzscMR.js";import"./symbol-C7BRuArB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-85rrli-w.js";import"./uniqBy-BJyco1_Z.js";import"./iteratee-DXjRqzC3.js";import"./tooltipContext-BkqVKhae.js";import"./AnimatedItems-CREItNhG.js";import"./useAnimationId-DievnnW1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CifaugWI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcOcWj43.js";import"./RegisterGraphicalItemId-CuBJ-yCL.js";import"./ErrorBarContext-BTWgR7nJ.js";import"./GraphicalItemClipPath-BPT-cS9W.js";import"./SetGraphicalItem-DPRJSznG.js";import"./getZIndexFromUnknown-DcSgqBPO.js";import"./graphicalItemSelectors-C2JJLewQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
