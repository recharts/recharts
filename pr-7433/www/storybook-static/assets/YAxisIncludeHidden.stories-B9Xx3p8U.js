import{r as f,R as e}from"./iframe-CT_on4dN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-C8PhcMfF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-9YwY2T6T.js";import{C as k}from"./ComposedChart-CqZcgDJh.js";import{X as K}from"./XAxis-DM4CuZe_.js";import{L as v}from"./Legend-CsXBchnl.js";import{B as s}from"./Bar-C0k4TCjt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DAlxn1Zj.js";import"./CartesianAxis-Dqr_Wojb.js";import"./Layer-BDukNzPA.js";import"./resolveDefaultProps-Ngbi67w9.js";import"./Text-CMIOZbxn.js";import"./DOMUtils-CLh3lutj.js";import"./isWellBehavedNumber-DcXfDBUW.js";import"./Label-DK-X0Mes.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBvvwP5n.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./types-BSLS2Rfw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./immer-MMHbxa5P.js";import"./RechartsWrapper-C-4qOiYS.js";import"./index-B37YLZmy.js";import"./index-BLrAz-7b.js";import"./axisSelectors-CiriuU2L.js";import"./d3-scale-B0V457C8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CPDAsd82.js";import"./chartDataContext-BNQnQ5VT.js";import"./CategoricalChart-BJTL86x_.js";import"./Symbols-DXCrjgw-.js";import"./symbol-Cr5BIINB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BcUuC6UH.js";import"./uniqBy-DJ-FcwmE.js";import"./iteratee-BUWsjaYF.js";import"./tooltipContext-C9oYA6ww.js";import"./AnimatedItems-B___w46g.js";import"./useAnimationId-DfgP8Qzr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CqE8KoLV.js";import"./ActiveShapeUtils-7HjO8Td_.js";import"./RegisterGraphicalItemId-aTaFmyQg.js";import"./ErrorBarContext-BWZYzIr8.js";import"./GraphicalItemClipPath-BI7LHR9E.js";import"./SetGraphicalItem-Cgc_8Ru0.js";import"./getZIndexFromUnknown-DJaqAgwL.js";import"./graphicalItemSelectors-S_eympvH.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
