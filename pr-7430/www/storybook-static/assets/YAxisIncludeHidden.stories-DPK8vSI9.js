import{r as f,R as e}from"./iframe-D_P_Mvdh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DVaDEIZb.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DWG8bKuL.js";import{C as k}from"./ComposedChart-C2CR4N0a.js";import{X as K}from"./XAxis-qMeue6_L.js";import{L as v}from"./Legend-DohzNoFA.js";import{B as s}from"./Bar-42slfoJy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B4It9gJG.js";import"./CartesianAxis-CFHvtBrK.js";import"./Layer-DPlEhKnR.js";import"./resolveDefaultProps-D055Uems.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./Label-XikFYvD7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_lVTO01.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./types-BEWgGyLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./immer-zUUuTuVf.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./Symbols-EQJpu1dQ.js";import"./symbol-BLc3Uspj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-saJFZnh4.js";import"./uniqBy-CXjOom_h.js";import"./iteratee-rU0UrMDe.js";import"./tooltipContext-iF3enNPc.js";import"./AnimatedItems-TOHLuZU5.js";import"./useAnimationId-B85ZSEKA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BP8C9lPh.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./ErrorBarContext-CuQjxX0z.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getZIndexFromUnknown-DdEC_rqJ.js";import"./graphicalItemSelectors-beDx0GkI.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
