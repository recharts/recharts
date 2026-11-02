import{r as f,R as e}from"./iframe-Dzq6KhZI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZEADbr5.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DYy_9E3f.js";import{C as k}from"./ComposedChart-ZLGekMnz.js";import{X as K}from"./XAxis-Cwq9lpMm.js";import{L as v}from"./Legend-BekpsZFn.js";import{B as a}from"./Bar-LqRue3qu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ns1HN8QT.js";import"./Text-D6SfU34x.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./throttle-PAjjPANm.js";import"./axisSelectors-B8Xp5jln.js";import"./d3-scale-BwgC5IAo.js";import"./CartesianAxis-DeYfDX_6.js";import"./Layer-DdRdeMHx.js";import"./types-Bt-JjK9T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Du3nHOoA.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./Symbols-CuwHSUOy.js";import"./symbol-5MHZNE2z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-L0DqCH6F.js";import"./uniqBy-wUI6H3pU.js";import"./iteratee-2KPcfIOh.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-0dTnEet5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEWurK0o.js";import"./useAnimationId-B5vYW3bS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./tooltipContext-Dantp0Or.js";import"./dataEntryStyles-BDzv2dJf.js";import"./ErrorBarContext-DWqusyea.js";import"./activeStyles-B6qdsX9q.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getZIndexFromUnknown-Cvy0i2cX.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./omit-CIlgakHL.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
