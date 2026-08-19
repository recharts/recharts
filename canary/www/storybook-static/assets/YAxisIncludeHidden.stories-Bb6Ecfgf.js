import{r as f,R as e}from"./iframe-CO2wOmL3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DEg_MfYL.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CjYLmU03.js";import{C as k}from"./ComposedChart-BmaCVHl6.js";import{X as K}from"./XAxis-D8l1zj0t.js";import{L as v}from"./Legend-CIC-APY1.js";import{B as s}from"./Bar-DYYXxPHv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQLK-wuU.js";import"./Text-D02hyY3C.js";import"./resolveDefaultProps-jUsiawGP.js";import"./DOMUtils-C9bi6LZn.js";import"./isWellBehavedNumber-BQRlzWpP.js";import"./useBackwardsCompatibleTheme-DeUToV_i.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hD4R9Zay.js";import"./index-C2bFqevd.js";import"./index-vFvBy9sc.js";import"./RechartsWrapper-QtML1m_J.js";import"./index-di8y7Hm0.js";import"./index-_W7z4BVf.js";import"./throttle-BF_C9j3I.js";import"./axisSelectors-CX7Lxi19.js";import"./d3-scale-C9Gp2SJN.js";import"./renderedTicksSlice-BFOY10tL.js";import"./CartesianAxis-B8e0zgyu.js";import"./Layer-wYmixdFE.js";import"./types-m7U1KOoZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CWwcrxvU.js";import"./chartDataContext-XcRgiNTG.js";import"./CategoricalChart-shIifM_V.js";import"./Symbols-Bw6Lb_U6.js";import"./symbol-BB5e3oBF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-U-2NXguD.js";import"./uniqBy-DnW7J1Px.js";import"./iteratee-BI2qvuKr.js";import"./AnimatedItems-D8MD0Tf6.js";import"./useAnimationId-C-2OrkuN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-a3w511z3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CGE1F6kM.js";import"./tooltipContext-CvUp6qIL.js";import"./RegisterGraphicalItemId-CYj5gZOD.js";import"./ErrorBarContext-CkVZ1uFV.js";import"./GraphicalItemClipPath-Bz34Vg6G.js";import"./SetGraphicalItem-BUOFB7Tk.js";import"./getZIndexFromUnknown-CrwaNoqv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DjoIhJtf.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
