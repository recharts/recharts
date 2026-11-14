import{r as f,R as e}from"./iframe-DB1dQNP8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CIxMAlZN.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-4nnTulLE.js";import{C as k}from"./ComposedChart-CXmJ-ojD.js";import{X as K}from"./XAxis-CMTVdgXW.js";import{L as v}from"./Legend-u1l_rcUz.js";import{B as a}from"./Bar-DEBVvE7y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-jFA6iMVu.js";import"./Text-C1medGIX.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./throttle-BFaVdKGa.js";import"./axisSelectors-DYpJMmPb.js";import"./d3-scale-BO6-R8pB.js";import"./CartesianAxis-C8e-4BIf.js";import"./Layer-Dv8-s5I6.js";import"./types-DtWjgFmy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D-0kkOAc.js";import"./index-BBS885gB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BSa1uinT.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./Symbols-UlDypbOg.js";import"./symbol-CJrx0ghD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-RlCX_v1O.js";import"./uniqBy-CbTOLIgk.js";import"./iteratee-BDHXi_B6.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-Cv4r99AD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DIjJyhRJ.js";import"./useAnimationId-CoLe5YqV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bsyq6LIm.js";import"./tooltipContext-BbtR5UQH.js";import"./ErrorBarContext-XalCVz8w.js";import"./activeStyles-ByNnOm-i.js";import"./SetGraphicalItem-BpLBLRYe.js";import"./getZIndexFromUnknown-CzADK01Y.js";import"./useEffectiveDataKey-H48CmBWB.js";import"./omit-DgzgNLve.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
