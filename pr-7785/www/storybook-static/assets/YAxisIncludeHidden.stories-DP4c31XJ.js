import{r as f,R as e}from"./iframe-WBosH1gH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CenhW_SV.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DY0UoJ4l.js";import{C as k}from"./ComposedChart-DgMot__w.js";import{X as K}from"./XAxis-m7Q_C79b.js";import{L as v}from"./Legend-DKwORgxj.js";import{B as a}from"./Bar-DoQkJol7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BCHXbIDv.js";import"./Text-DUKo7lId.js";import"./resolveDefaultProps-B2r9_mKe.js";import"./DOMUtils-Cua0edvn.js";import"./isWellBehavedNumber-BkYn7WHA.js";import"./useId-QCeL7Xpe.js";import"./useBackwardsCompatibleTheme-Dm9WBqGk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ceqldfm9.js";import"./index-BwqgnM9k.js";import"./index-VfXF9cRB.js";import"./RechartsWrapper-B0qr77rU.js";import"./axisSelectors-DVaMQoZI.js";import"./throttle-XsvTB-sR.js";import"./d3-scale-D0rOwI1X.js";import"./index-vxpjOmvK.js";import"./index-0eRMU_eW.js";import"./renderedTicksSlice-w1R0M-NQ.js";import"./index-C25eF-tn.js";import"./CartesianAxis-Bjry6SmX.js";import"./Layer-DlEXHs0c.js";import"./types-CXdVyMYF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DVqibfCK.js";import"./chartDataContext-CniWriLR.js";import"./CategoricalChart-DG5t8KxI.js";import"./Symbols-CDs3PTZo.js";import"./symbol-DTBAqEY2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-VmdMhEAv.js";import"./uniqBy-CDDW1t5J.js";import"./iteratee-C0LkWsI5.js";import"./AnimatedItems-DJehR24_.js";import"./useAnimationId-B1IfIBZT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CCQKHFOK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DhiQ5sHd.js";import"./tooltipContext-C_Mku4Mk.js";import"./RegisterGraphicalItemId-CooVBKDB.js";import"./ErrorBarContext-LEGekQDa.js";import"./GraphicalItemClipPath-t-5ZkTcv.js";import"./SetGraphicalItem-C5z9UzHr.js";import"./getZIndexFromUnknown-BPqJjSTB.js";import"./useGraphicalItemIdentity-BcmjlH91.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
