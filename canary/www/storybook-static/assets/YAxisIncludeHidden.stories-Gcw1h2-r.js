import{r as f,R as e}from"./iframe-CLIhRm7R.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CpKr4jH1.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-cURKLlYU.js";import{C as k}from"./ComposedChart-DplTXjfB.js";import{X as K}from"./XAxis-ClFJPrvR.js";import{L as v}from"./Legend-BwvE44zk.js";import{B as a}from"./Bar-DodE2F49.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DearAakw.js";import"./Text-JwQNyxYp.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./throttle-B7ykPIAJ.js";import"./axisSelectors-CDU9IwIv.js";import"./d3-scale-D44QmEnt.js";import"./CartesianAxis-xu52TX6T.js";import"./Layer-BbygySlV.js";import"./types-B-D67JLt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwQg3ppC.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./Symbols-CL9eWqJw.js";import"./symbol-DfjzGj-p.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Dhc2h3vn.js";import"./uniqBy-CxU7f0Dn.js";import"./iteratee-uHzYhx_d.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BrgkWZuf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_VT99gpA.js";import"./useAnimationId-CFCPoirY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./tooltipContext-CF_VsdUz.js";import"./ErrorBarContext-D47utnLy.js";import"./activeStyles-DkO8dKQi.js";import"./SetGraphicalItem-Byj-zkni.js";import"./getZIndexFromUnknown-Q2U1gBg2.js";import"./useEffectiveDataKey-B6ZXrXvv.js";import"./omit-BzKSo3AK.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
