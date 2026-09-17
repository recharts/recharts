import{r as f,R as e}from"./iframe-BYch73GC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-lTNE--Lq.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-mAK65TxS.js";import{C as k}from"./ComposedChart-DaJB9Tix.js";import{X as K}from"./XAxis-DvBxon3R.js";import{L as v}from"./Legend-C0uLIxN-.js";import{B as a}from"./Bar-Be5Me8Bw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BRuA27Hh.js";import"./Text-C5jLRMCm.js";import"./resolveDefaultProps-DWdkSMZg.js";import"./DOMUtils-DGuhwttO.js";import"./isWellBehavedNumber-BP9XFgrX.js";import"./useId-BzCCYXNS.js";import"./useBackwardsCompatibleTheme-BIqSCxVj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CKmbkchN.js";import"./index-BeTLkY2H.js";import"./index-Bc_o9NJn.js";import"./RechartsWrapper-BLQkthbe.js";import"./axisSelectors-B4VSjfJY.js";import"./throttle-BEoPPt7A.js";import"./d3-scale-B2BH8dUM.js";import"./index-BIGQU915.js";import"./index-Q_fYP1Tj.js";import"./renderedTicksSlice-BkcMIj-K.js";import"./index-D3IuKIwS.js";import"./CartesianAxis-CWGo8wQX.js";import"./Layer-BCbhxOAa.js";import"./types-CIbUV0Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cwhwr6-l.js";import"./chartDataContext-WIuoRrqx.js";import"./CategoricalChart-13njktaQ.js";import"./Symbols-B9l_Ouh1.js";import"./symbol-DSvElD_H.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXQ9oZOv.js";import"./uniqBy-Dk_A4srz.js";import"./iteratee-CLHchHka.js";import"./AnimatedItems-D4BR2dBY.js";import"./useAnimationId-CPbSSa-W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DpbOLOlD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-p0MunX2r.js";import"./tooltipContext-DojgVIyB.js";import"./RegisterGraphicalItemId-C0FXSJZg.js";import"./ErrorBarContext-BZq9v9h8.js";import"./GraphicalItemClipPath-6dEZaUUD.js";import"./SetGraphicalItem-BJF1DUih.js";import"./getZIndexFromUnknown-BlYpE3BC.js";import"./useGraphicalItemIdentity-_0Nc-geg.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
