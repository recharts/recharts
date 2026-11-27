import{r as f,R as e}from"./iframe-CqOe7k5Y.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DEQnYc30.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-HvZ_KFp3.js";import{C as k}from"./ComposedChart-BeSg73-5.js";import{X as K}from"./XAxis-BHc3UEw3.js";import{L as v}from"./Legend-B3y3jZUw.js";import{B as a}from"./Bar-wsvdD2Nf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./Label-yQ-nD2jU.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./throttle-BawAsSGW.js";import"./axisSelectors-HXuL0A3L.js";import"./diverging-B6EefrnE.js";import"./CartesianAxis-botWNN7F.js";import"./Layer-CqFOI8aQ.js";import"./types-DHkZz5Qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C6U1x4NS.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BT23gI0j.js";import"./uniqBy-bwHS4C5O.js";import"./iteratee-BmCg4GfS.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CclxtIIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-mBtSHpSc.js";import"./useAnimationId-_GPHqvCi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./tooltipContext-D9JNoTMB.js";import"./ErrorBarContext-CQfvj0jY.js";import"./activeStyles-DyQy4djd.js";import"./SetGraphicalItem-5gHOvcya.js";import"./getZIndexFromUnknown-DT-UApPJ.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./omit-UGBfM6EB.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
