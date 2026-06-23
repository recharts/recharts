import{r as f,R as e}from"./iframe-Dv5VASSf.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-CgS9V_Pe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CM9TsEF-.js";import{C as k}from"./ComposedChart-CkKDXzJX.js";import{X as K}from"./XAxis-DxRbB3rx.js";import{L as v}from"./Legend-B8PmGeIW.js";import{B as s}from"./Bar-CfZeXqO6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bs09YXrP.js";import"./CartesianAxis-UbDtFbfy.js";import"./Layer-LJvjQizz.js";import"./resolveDefaultProps-Bff0INFN.js";import"./Text-Dd7f7n_i.js";import"./DOMUtils-DlL30Y-Y.js";import"./isWellBehavedNumber-CBezu4RU.js";import"./Label-sX9J87v-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CuZjWQGk.js";import"./index-DkjavtyB.js";import"./index-CvMvJg2Y.js";import"./types-DANPZVh2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BO9tlAnq.js";import"./immer-DhSozQAr.js";import"./RechartsWrapper-DX1uLaD6.js";import"./index-Ben5USOE.js";import"./index-B6-1923T.js";import"./axisSelectors-xODl-OZb.js";import"./d3-scale-BXwJ1MAg.js";import"./CartesianChart-DkI46ifx.js";import"./chartDataContext-CF17-miU.js";import"./CategoricalChart-U0rXY0aa.js";import"./Symbols-T07kToHp.js";import"./symbol-B3QIDv-h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CvwtkPiT.js";import"./uniqBy-Cz0JqC6a.js";import"./iteratee-DX-qp5DO.js";import"./tooltipContext-CYAxbJ0Z.js";import"./AnimatedItems-D5YeeLN_.js";import"./useAnimationId-MWsls-nH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dsk6_L47.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CEehWVTg.js";import"./RegisterGraphicalItemId-BgWpYWle.js";import"./ErrorBarContext-D_vZY3q2.js";import"./GraphicalItemClipPath-CCozhxOu.js";import"./SetGraphicalItem-nBqj_N_H.js";import"./getZIndexFromUnknown-CgrHJhQx.js";import"./graphicalItemSelectors-BoKD1Uav.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
