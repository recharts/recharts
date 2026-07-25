import{r as f,R as e}from"./iframe-DtpJQkSw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-7KC79Jwd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dy2ZfcaY.js";import{C as k}from"./ComposedChart-oPCW50r4.js";import{X as K}from"./XAxis-BDLA9mvH.js";import{L as v}from"./Legend-Xcv6dTtn.js";import{B as s}from"./Bar-nY2TF4Rx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-xTL6XmTN.js";import"./Layer-A5fdUiAt.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./Label-C9iRyFHw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnsLSc-b.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./types-D6abfmrW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./throttle-CYLsUs0w.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./axisSelectors-BtA0yFqg.js";import"./d3-scale-BbQAu0RB.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./Symbols-DDPwPNmK.js";import"./symbol-avOxhd6C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C4-NwrTh.js";import"./uniqBy-BnEmKZKr.js";import"./iteratee-ySlvR2sc.js";import"./tooltipContext-GY6HBjLg.js";import"./AnimatedItems-EBWp9peZ.js";import"./useAnimationId-B_99W7UQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0kyo6e1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./ErrorBarContext-CjSCr-ku.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./getZIndexFromUnknown-Gcw-V9Nf.js";import"./graphicalItemSelectors-3hFJ8itx.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
