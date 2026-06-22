import{r as f,R as e}from"./iframe-CvYyRmMb.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CjttnAc1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cp8J06te.js";import{C as k}from"./ComposedChart-B1VIvVBS.js";import{X as K}from"./XAxis-3reDaDaV.js";import{L as v}from"./Legend-BG5egmz1.js";import{B as s}from"./Bar-CywyCTJv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CIMqXaai.js";import"./CartesianAxis-Be4--iUh.js";import"./Layer-C5boFLOM.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./Label-CYZiU-dh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRD83X3W.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./types-Zq1Yq0zW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./immer-DxglGVhE.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./index-D24-ZTWt.js";import"./index-BDFNdDeq.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./Symbols-BxgPZ6x6.js";import"./symbol-CZiTVtyO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAsgb7km.js";import"./uniqBy-xgluxroo.js";import"./iteratee-B7aRbMAg.js";import"./tooltipContext-CHMPJv0A.js";import"./AnimatedItems-C6-g87vu.js";import"./useAnimationId-BRj_sN3I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BpNkhbV-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./ErrorBarContext-CaDNtEdt.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./getZIndexFromUnknown-CYsi7ZAZ.js";import"./graphicalItemSelectors-C0p2i175.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
