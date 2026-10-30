import{r as f,R as e}from"./iframe-D4SWC0C9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DZiEXhVb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DtLu2rz0.js";import{C as k}from"./ComposedChart-CixY_uah.js";import{X as K}from"./XAxis-DY95kjca.js";import{L as v}from"./Legend-DVZRLGV5.js";import{B as a}from"./Bar-DjEKp3Kk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4GKK3W-.js";import"./Text-K3oqQ0qr.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./throttle-i1uEXwfS.js";import"./axisSelectors-D7bj-nZi.js";import"./d3-scale-CqqO4xMX.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B-nLjLBG.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./Symbols-mjJ7TtB9.js";import"./symbol-IW8UYWs4.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C6BynYXf.js";import"./dataEntryStyles-Df562HAt.js";import"./useElementOffset-BNAtca7y.js";import"./uniqBy-9w4q5yQd.js";import"./iteratee-DZT4M3pu.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D_z7ECQv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C8mkpCGv.js";import"./useAnimationId-DKXEwRJj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKN1RXI0.js";import"./tooltipContext-Pbh55R0H.js";import"./ErrorBarContext-CkfaNLfH.js";import"./activeStyles-DGXStsvL.js";import"./SetGraphicalItem-CmNEMHt3.js";import"./getZIndexFromUnknown-Dr9Ow_Kt.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-B-O25Qiu.js";import"./omit-Bf-WxhgY.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
