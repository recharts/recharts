import{r as f,R as e}from"./iframe-B87NFlIP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DEe_988n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BXFzXSCA.js";import{C as k}from"./ComposedChart-B90Uqp-u.js";import{X as K}from"./XAxis-B3Q4Ss-r.js";import{L as v}from"./Legend-BcdnT74J.js";import{B as s}from"./Bar-C6EqMTYB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D4uUMniQ.js";import"./CartesianAxis-fmozs-7p.js";import"./Layer-DtWSIRkx.js";import"./resolveDefaultProps-BYA5JPhb.js";import"./Text-ClNCBjV1.js";import"./DOMUtils-CIzchNYO.js";import"./isWellBehavedNumber-BoHGXF6T.js";import"./Label-jdUwmN2T.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D6XfIW9f.js";import"./index-CKu5wzsE.js";import"./index-00O5dIdv.js";import"./types-D1UBNpSv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Ca7Y29Mx.js";import"./immer-QFj5HQLb.js";import"./RechartsWrapper-BUNisers.js";import"./index-BOjePhwv.js";import"./index-CacHHN54.js";import"./axisSelectors-D4K8gA-k.js";import"./d3-scale-CHNXjue9.js";import"./CartesianChart-C-pJxpsO.js";import"./chartDataContext-CHvUY65z.js";import"./CategoricalChart-C9EAem8i.js";import"./Symbols-D5uZC9pk.js";import"./symbol-D0afevon.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BomvHThz.js";import"./uniqBy-CbnJDgaK.js";import"./iteratee-jyvq17WE.js";import"./tooltipContext-CH_fFDsc.js";import"./AnimatedItems-D7tPVB1r.js";import"./useAnimationId-a9uwME5U.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BoHjQjL7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba_G1J2p.js";import"./RegisterGraphicalItemId-B6YKmbmq.js";import"./ErrorBarContext-DZxTDSzq.js";import"./GraphicalItemClipPath-q-krKk84.js";import"./SetGraphicalItem-CKmZqTho.js";import"./getZIndexFromUnknown-D1FslVoV.js";import"./graphicalItemSelectors-DzE3iaTW.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
