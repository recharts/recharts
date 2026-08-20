import{r as f,R as e}from"./iframe-BhiOFyfH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Dze_1sMv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-WFdO_Wlf.js";import{C as k}from"./ComposedChart-BRF7api-.js";import{X as K}from"./XAxis-D91QOOUm.js";import{L as v}from"./Legend-CeOycJFx.js";import{B as s}from"./Bar-BbQcCpzY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CAt1bZso.js";import"./Text-BMsFzFUq.js";import"./resolveDefaultProps-BHk6Yj6z.js";import"./DOMUtils-BcE_Ruj2.js";import"./isWellBehavedNumber-BwlogVL6.js";import"./useId-BRnf_4WU.js";import"./useBackwardsCompatibleTheme-DVBvH0yy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CI2RHWLO.js";import"./index-BRJFlVc0.js";import"./index-DeYpMxlR.js";import"./RechartsWrapper-B2d-0bYl.js";import"./index-BT9oMJbA.js";import"./index-DJy0Duu-.js";import"./throttle-BBaDx3dP.js";import"./axisSelectors-Bl2dPHcW.js";import"./d3-scale-C-h-rPXJ.js";import"./renderedTicksSlice-zx9Xm1Pt.js";import"./CartesianAxis-CQrYYA1t.js";import"./Layer-Ba5yNHO4.js";import"./types-BWOiEP2_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B6R4HcNL.js";import"./chartDataContext-BhguihgP.js";import"./CategoricalChart-DcSIPsvk.js";import"./Symbols-BLL-AV4B.js";import"./symbol-DbxTuWVO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BDZs2rv_.js";import"./uniqBy-P6yERp21.js";import"./iteratee-BsV9Fw2p.js";import"./AnimatedItems-Dz4w2Slg.js";import"./useAnimationId-DyRYr1Ls.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4NblHq1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWii8vVl.js";import"./tooltipContext-jEj4Ay2E.js";import"./RegisterGraphicalItemId-fX9aZfoT.js";import"./ErrorBarContext-8r615JCx.js";import"./GraphicalItemClipPath-CDXt4g8R.js";import"./SetGraphicalItem-DxySj5XD.js";import"./getZIndexFromUnknown-BDDmmGE0.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CaeWAIXx.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
