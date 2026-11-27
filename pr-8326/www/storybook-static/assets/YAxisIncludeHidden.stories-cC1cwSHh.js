import{r as f,R as e}from"./iframe-PHc5u_Go.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-W1GxgUQy.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-O7J7Jeos.js";import{C as k}from"./ComposedChart-CJW-bEl0.js";import{X as K}from"./XAxis-CwnWWi2T.js";import{L as v}from"./Legend-BoIqYOYs.js";import{B as a}from"./Bar-BqmF2dhP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CtovE_6b.js";import"./get-CjriyByo.js";import"./Label-B_2vkxlb.js";import"./Text-B4WGoEXs.js";import"./ZIndexLayer-jWs-pX7J.js";import"./index-CENrQ3Fo.js";import"./index-BL548a5i.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8shuSpM.js";import"./throttle-B7fmfrhU.js";import"./axisSelectors-D8A3lwIR.js";import"./diverging-Ca8JIZw_.js";import"./CartesianAxis-DA5HtWf2.js";import"./Layer-DvHcP4X_.js";import"./types-DsQO6Yiz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_HpVp09.js";import"./index-B6C2iRoi.js";import"./index-B8MUftfu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-0aodawEv.js";import"./index-B4O5QRRq.js";import"./fillDefinitions-CfETDC7a.js";import"./CartesianChart-B8odkp-B.js";import"./chartDataContext-uHFtVhR5.js";import"./CategoricalChart-BjWAqdhB.js";import"./Symbols-jKk-8HGk.js";import"./symbol-Bn8bSYai.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D5tMp2PA.js";import"./uniqBy-2OtzGgB3.js";import"./iteratee-Oda0bPnm.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-B0gayhW-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EDZm1eQj.js";import"./useAnimationId-Crie2Rxs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4zLzrPeO.js";import"./tooltipContext-DID6IymL.js";import"./ErrorBarContext-DX7Uypjj.js";import"./activeStyles-C4EAX3cB.js";import"./SetGraphicalItem-CpbhBJBp.js";import"./getZIndexFromUnknown-DVAgy0Q3.js";import"./useEffectiveDataKey-Br4Rw_9X.js";import"./omit-BXi7naXk.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
