import{r as f,R as e}from"./iframe-CRyknHcV.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DKnjJQyk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D94J06pN.js";import{C as k}from"./ComposedChart-DHhrqJQt.js";import{X as K}from"./XAxis-CQvMjduc.js";import{L as v}from"./Legend-C3KuxZ0g.js";import{B as s}from"./Bar-bUfy41TN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bb81vEf3.js";import"./Text-AosieIGC.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./DOMUtils-DDmVxA4T.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CO71XxiU.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./throttle-CdnYcrez.js";import"./axisSelectors-HI2cMDW5.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./CartesianAxis-Czm-DLiC.js";import"./Layer-tFywX8jB.js";import"./types-CgTXGcnU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./Symbols-CzYfCG8Y.js";import"./symbol-BGzG6k2R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";import"./tooltipContext-DaicPEXJ.js";import"./AnimatedItems-DuJcIC8o.js";import"./useAnimationId-B3genVAW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C7u2937O.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getZIndexFromUnknown-BD_oDrEX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-EbGwL4_5.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
