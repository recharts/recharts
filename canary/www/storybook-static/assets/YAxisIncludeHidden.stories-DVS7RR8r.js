import{r as f,R as e}from"./iframe-BCDSQyOo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DnB_2g0Q.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CihbJEZu.js";import{C as k}from"./ComposedChart-DErsj6jf.js";import{X as K}from"./XAxis-Bk5D6i9E.js";import{L as v}from"./Legend-BLHD4EtA.js";import{B as a}from"./Bar-BjCB3HvL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C128IvfG.js";import"./Text-RrCvwkND.js";import"./resolveDefaultProps-s8FlAHQv.js";import"./ZIndexLayer-PvoR44l1.js";import"./index-fM7uFcW2.js";import"./index-I1h0g8eb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-E8zUoJ.js";import"./throttle-D1lsoNSG.js";import"./axisSelectors-Cvi9anx3.js";import"./d3-scale-CYMX0yrb.js";import"./CartesianAxis-DeXvVTxW.js";import"./Layer-sje4p3Rc.js";import"./types-Czx6BcyQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xgVyqeD0.js";import"./index-ClkyNFpC.js";import"./index-Q4jLEkfo.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BqnNMENS.js";import"./index-oH22xoCa.js";import"./fillDefinitions-LB53xD7z.js";import"./CartesianChart-CkJbsuu1.js";import"./chartDataContext-B0YZn_2w.js";import"./CategoricalChart-CNAFu95B.js";import"./Symbols-BhFpev2q.js";import"./symbol-BFQRYOt6.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BdQyjpik.js";import"./uniqBy-DshlIWW5.js";import"./iteratee-_elDKS4N.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Dui-VolR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFM8azDG.js";import"./useAnimationId-DOTZ38LK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHvAKsEu.js";import"./tooltipContext-DaGu1V0P.js";import"./ErrorBarContext-Cfqy-sXq.js";import"./activeStyles-BVEmlDAe.js";import"./SetGraphicalItem-CopBxnc9.js";import"./getZIndexFromUnknown-CtKDpY59.js";import"./useEffectiveDataKey-Chw-9k17.js";import"./omit-cgDoB3Ea.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
