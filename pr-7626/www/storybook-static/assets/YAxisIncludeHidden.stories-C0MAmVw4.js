import{r as f,R as e}from"./iframe-rYRmlY_w.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BWeWjLFg.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CW9g3Df4.js";import{C as k}from"./ComposedChart-CJWWrFGv.js";import{X as K}from"./XAxis-B2S1kxsc.js";import{L as v}from"./Legend-DTUQ316l.js";import{B as s}from"./Bar-DE0rgum-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C_0fnefy.js";import"./Text-yyeh64ow.js";import"./resolveDefaultProps-BpsYi27l.js";import"./DOMUtils-vuT3ag2A.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjuCBj9U.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./throttle-DMLB0n1a.js";import"./axisSelectors-CawrvlcN.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./CartesianAxis-BPXoMhkW.js";import"./Layer-Dpa7ZKP5.js";import"./types-B2Hj88Lf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./Symbols-hfYUrlaK.js";import"./symbol-Bbig07af.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlBkdftn.js";import"./uniqBy-1Q7zCRmp.js";import"./iteratee-C2W6XbU2.js";import"./tooltipContext-B8sauHiC.js";import"./AnimatedItems-CIev447X.js";import"./useAnimationId-B08Ps5mJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B78Clo56.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CwtXXETb.js";import"./RegisterGraphicalItemId-CgoQC8_y.js";import"./ErrorBarContext-D9hFLWDz.js";import"./graphicalItemIdentity-CcyqkVrD.js";import"./SetGraphicalItem-BR2pwaBe.js";import"./getZIndexFromUnknown-Cw_gD9AS.js";import"./graphicalItemSelectors-CX8YC0IP.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
