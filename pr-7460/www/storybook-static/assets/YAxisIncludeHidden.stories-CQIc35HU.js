import{r as f,R as e}from"./iframe-DQmeeGiA.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BSQK2YTa.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-vj7A5RkB.js";import{C as k}from"./ComposedChart-CaXqoiyd.js";import{X as K}from"./XAxis-CPOb-1qE.js";import{L as v}from"./Legend-C01_CC6W.js";import{B as s}from"./Bar-BZHeWxOi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D0YgmYSp.js";import"./CartesianAxis-CsI9VW1t.js";import"./Layer-C92GpBxv.js";import"./resolveDefaultProps-CQRwsHO0.js";import"./Text-CaOtzMPo.js";import"./DOMUtils-D4CFUHQm.js";import"./isWellBehavedNumber-CJ4H_fXR.js";import"./Label-DLumr0gz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LS7m1tXW.js";import"./index-DCJPjZ_f.js";import"./index-D_KMR0re.js";import"./types-BWqAEvBR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CpMyOcpp.js";import"./immer-CuM-_qKB.js";import"./RechartsWrapper-D3uqokgy.js";import"./index-D1lTGX2z.js";import"./index-ZLNt73_J.js";import"./axisSelectors-Cn3uvYUg.js";import"./d3-scale-B-26TW07.js";import"./CartesianChart-CE19F1By.js";import"./chartDataContext-GPNpGYxg.js";import"./CategoricalChart-D7Ayh5uN.js";import"./Symbols-uMOogOnn.js";import"./symbol-BWzlkA2r.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Duwsc3QZ.js";import"./uniqBy-KqLhsUPy.js";import"./iteratee-B34lqcgr.js";import"./tooltipContext-YOw13Mgv.js";import"./AnimatedItems-DSodAZpf.js";import"./useAnimationId-VbcZ3sEu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bsb4rUs5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHmC6EYX.js";import"./RegisterGraphicalItemId-Bgc1uwdC.js";import"./ErrorBarContext-aN2SYuw4.js";import"./GraphicalItemClipPath-BWRZakeV.js";import"./SetGraphicalItem-CiXKqcwE.js";import"./getZIndexFromUnknown-BhGLCuZg.js";import"./graphicalItemSelectors-QlKLCOv9.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
