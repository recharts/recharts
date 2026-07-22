import{r as f,R as e}from"./iframe-CM9KFlpR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CI94Yo_i.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-i3oRyNLb.js";import{C as k}from"./ComposedChart-BliiGcYz.js";import{X as K}from"./XAxis-BpZNPHzq.js";import{L as v}from"./Legend-XLGRzbOD.js";import{B as s}from"./Bar-Cwvj_01T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-wxz_d6Fj.js";import"./Layer-CyTLoz3L.js";import"./resolveDefaultProps-Ck7rGCA-.js";import"./Text-Z2Be4kdC.js";import"./DOMUtils-5L50_gtE.js";import"./isWellBehavedNumber-D6ap16Bm.js";import"./Label-8JT3S2zg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CLQFgWIH.js";import"./index-DWeI466K.js";import"./index-CIwJAIlL.js";import"./types-BZH27c5K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9ba2EdW.js";import"./throttle-De6mCLNM.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DaqDuaqH.js";import"./index-BQLe23-Y.js";import"./index-CO_J2hQh.js";import"./axisSelectors-gWKpmW3G.js";import"./d3-scale-BtCHm39u.js";import"./CartesianChart-Bh6VCjY7.js";import"./chartDataContext-Do1rIj0R.js";import"./CategoricalChart-DG8gXHxR.js";import"./Symbols-CQYN6ifz.js";import"./symbol-C_YmnP65.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ce1ZX6FX.js";import"./uniqBy-CUPFsq1k.js";import"./iteratee-FPt0V19d.js";import"./tooltipContext-CZ6_3IBR.js";import"./AnimatedItems-Dc6JrbcK.js";import"./useAnimationId-OG1_HfMp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTzWPR0Y.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BKApU02X.js";import"./RegisterGraphicalItemId-BY7wzIRb.js";import"./ErrorBarContext-L6TULBDt.js";import"./GraphicalItemClipPath-mABwVFdR.js";import"./SetGraphicalItem-CktbvIN2.js";import"./getZIndexFromUnknown-Cv5Y_cVr.js";import"./graphicalItemSelectors-DJPuYJhE.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
