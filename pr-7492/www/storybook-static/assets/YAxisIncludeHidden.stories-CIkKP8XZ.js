import{r as f,R as e}from"./iframe-C3hysSwX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-nAN9SxkJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-jLrLCsrp.js";import{C as k}from"./ComposedChart-4b-0Cq8-.js";import{X as K}from"./XAxis-Bz5F1_iJ.js";import{L as v}from"./Legend-BbXVm0XL.js";import{B as s}from"./Bar-DEXjRbxd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-4mmuOJ4Q.js";import"./CartesianAxis-DJwGDBXD.js";import"./Layer-BWZwdMd6.js";import"./resolveDefaultProps-XPHM9Bxg.js";import"./Text-9LavA5GP.js";import"./DOMUtils-B0ueEniv.js";import"./isWellBehavedNumber-Cfqt3JW2.js";import"./Label-BY3nn8Dv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbmqSC7x.js";import"./index-BUU-eT_B.js";import"./index-DdpCgkK0.js";import"./types-B-fiXt0f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CSlp22Dw.js";import"./immer-BNUBbCyS.js";import"./RechartsWrapper-CJVzzpRJ.js";import"./index-BV0Ox4K8.js";import"./index-By0blv9S.js";import"./axisSelectors-BKkILLr_.js";import"./d3-scale-Z5oWCNO5.js";import"./CartesianChart-Dz5Andp2.js";import"./chartDataContext-Da5IPa1T.js";import"./CategoricalChart-BUhA_1lj.js";import"./Symbols-DHr4Jv60.js";import"./symbol-Dw8LmIBI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-TFATomwh.js";import"./uniqBy-rAXM5un4.js";import"./iteratee-Bj0cTPCe.js";import"./tooltipContext-Cl27E7yB.js";import"./AnimatedItems-CONL8zCq.js";import"./useAnimationId-CTVdzEbK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6Gug0yv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DTMmpBlQ.js";import"./RegisterGraphicalItemId-o0SeLVTS.js";import"./ErrorBarContext-D24MXSMJ.js";import"./GraphicalItemClipPath-Cs8iTjY6.js";import"./SetGraphicalItem-CmkEoewy.js";import"./getZIndexFromUnknown-DgktQUiA.js";import"./graphicalItemSelectors-BNxv7hUU.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
