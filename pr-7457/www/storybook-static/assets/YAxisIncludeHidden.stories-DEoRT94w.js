import{r as f,R as e}from"./iframe-CbmcvRkz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-C-NN2TSd.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DoKZE_fT.js";import{C as k}from"./ComposedChart-B9rJ9PPz.js";import{X as K}from"./XAxis-BXkS-79Y.js";import{L as v}from"./Legend-BEk0nWUL.js";import{B as s}from"./Bar-BF-Kn5C-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-prZAxsgN.js";import"./CartesianAxis-Duc97zpX.js";import"./Layer-aQjZulmS.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./Label-CMFdvkIW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ByjAgEa2.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./types-aj_9xhUM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BID11n2_.js";import"./immer-BWk67B8y.js";import"./RechartsWrapper-C6OXESHp.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./Symbols-B-Xu_6iF.js";import"./symbol-DbjlT6zf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYZx6MBE.js";import"./uniqBy-UCX-Zdy2.js";import"./iteratee-DJKoVJ9l.js";import"./tooltipContext-Dp_Ucbm_.js";import"./AnimatedItems-C8brG2ut.js";import"./useAnimationId-Bg4LY1-F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DL-7nMhN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./ErrorBarContext-Cf-_Bhe_.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./getZIndexFromUnknown-B_xtgGmb.js";import"./graphicalItemSelectors-C9f7OtbQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
