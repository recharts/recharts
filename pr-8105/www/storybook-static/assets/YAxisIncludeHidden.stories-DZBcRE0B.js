import{r as f,R as e}from"./iframe-BMnEk6rk.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bg-R0mkd.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-AHK2lLDY.js";import{C as k}from"./ComposedChart-DXU97qLG.js";import{X as K}from"./XAxis-DO8MMAbO.js";import{L as v}from"./Legend-CKtpkcjd.js";import{B as a}from"./Bar-DTDTUl4z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-h8wQzOus.js";import"./Text-C8Qyn2EQ.js";import"./resolveDefaultProps-B_QljJZX.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CeZI25QH.js";import"./throttle-BLJmRI7W.js";import"./axisSelectors-p5JtpZwX.js";import"./d3-scale-CFf5tOkL.js";import"./CartesianAxis-1xDTwGjL.js";import"./Layer-DhQvAzDq.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D4g7WfzD.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CKZUIDIC.js";import"./uniqBy-m6py-FT2.js";import"./iteratee-Dc85xDQN.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-Dd3JyrGq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CyQcxgx5.js";import"./useAnimationId-Ctda-hFk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./tooltipContext-AjAyigeH.js";import"./dataEntryStyles-DegCLzhf.js";import"./ErrorBarContext-dq2106Y0.js";import"./activeStyles-DlaO21qO.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getZIndexFromUnknown-CXaa_OOR.js";import"./useEffectiveDataKey-DQstj3az.js";import"./omit-Bm1-4z2k.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
