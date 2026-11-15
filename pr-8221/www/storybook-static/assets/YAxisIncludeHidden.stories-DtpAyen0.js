import{r as f,R as e}from"./iframe-B7xPXiPl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Cu3FI7G-.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DflaePKy.js";import{C as k}from"./ComposedChart-BdsejxH2.js";import{X as K}from"./XAxis-w-quiWhJ.js";import{L as v}from"./Legend-Dp2tckH4.js";import{B as a}from"./Bar-pP8aiRRj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-YOyO9lVV.js";import"./Text-BexCT2h6.js";import"./resolveDefaultProps-t98kZJWg.js";import"./ZIndexLayer-7qwpAdIl.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./throttle-BS8hni_u.js";import"./axisSelectors-Bm0UGi6R.js";import"./d3-scale-CVxlp6F9.js";import"./CartesianAxis-CcCV8fyf.js";import"./Layer-CYZUIq4P.js";import"./types-CQsoFKaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BcgQInkA.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ryxNmM2c.js";import"./uniqBy-C0NZ23ht.js";import"./iteratee-DojtXyrW.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C3moi0Z-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B2b4luYh.js";import"./useAnimationId-Bi0MWfey.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./tooltipContext-BTAT5JL5.js";import"./ErrorBarContext-DfxhnQqe.js";import"./activeStyles-CHc73Nrw.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getZIndexFromUnknown-CdI8jeTC.js";import"./useEffectiveDataKey-Bs8MhK-5.js";import"./omit-ZhhexLgu.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
