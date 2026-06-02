import{P as f,c as e}from"./iframe-Dy-e7pIM.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BX0V94CN.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-BAzwug6r.js";import{C as k}from"./ComposedChart-CBoFwAQh.js";import{X as K}from"./XAxis-CumYrXMb.js";import{L as v}from"./Legend-CbtrycXF.js";import{B as s}from"./Bar-DHD2fmgU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D_U-7Kmb.js";import"./CartesianAxis-kW3aoD-D.js";import"./Layer-BQggJIEv.js";import"./resolveDefaultProps-BOUnRnbS.js";import"./Text-DrCcB5Q6.js";import"./DOMUtils-CWH-10kL.js";import"./isWellBehavedNumber-Bj92k7jm.js";import"./Label-Bd4SV5Lr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgxZOhGb.js";import"./index-DUyY-sZ6.js";import"./index-B7Kt7cV8.js";import"./types-B745wbwD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D80uYtAJ.js";import"./immer-kVBDWM7h.js";import"./RechartsWrapper-D0mQ-9Gw.js";import"./index-SXoyUqv9.js";import"./index-rCxGgy9o.js";import"./axisSelectors-DHlr3EdZ.js";import"./d3-scale-MtjUkFvo.js";import"./CartesianChart-Cf77c1Wa.js";import"./chartDataContext-HpYadsZ6.js";import"./CategoricalChart-Csue9Qd9.js";import"./Symbols-D4yMEFQO.js";import"./symbol-DCQhxAU3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DUL3oAoP.js";import"./uniqBy-Cl9Zf0qP.js";import"./iteratee-BiQdkXya.js";import"./tooltipContext-Bpda8jyn.js";import"./ReactUtils-DdYRakW1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BL03ALcW.js";import"./useAnimationId-D1tL6Rir.js";import"./ActiveShapeUtils-FFunzflv.js";import"./RegisterGraphicalItemId-CWayAjG_.js";import"./ErrorBarContext-N7PuOz_i.js";import"./GraphicalItemClipPath-Birlsn4M.js";import"./SetGraphicalItem-rhS26CgA.js";import"./getZIndexFromUnknown-CaKlRU4E.js";import"./graphicalItemSelectors-CfFMNq7_.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
