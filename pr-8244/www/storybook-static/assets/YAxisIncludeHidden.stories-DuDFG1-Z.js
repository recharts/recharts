import{r as f,R as e}from"./iframe-DBZHgkHz.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-qEVvtCkb.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CCEect8Y.js";import{C as k}from"./ComposedChart-69aI63gR.js";import{X as K}from"./XAxis-Bnvf5Lo_.js";import{L as v}from"./Legend-yxNncvKz.js";import{B as a}from"./Bar-Ds0iGuqx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-rCJ8JAiM.js";import"./Text-DbdJ2rHF.js";import"./resolveDefaultProps-Bvsyp51I.js";import"./ZIndexLayer-BEGts5gU.js";import"./index-DGbD_6uH.js";import"./index-EJLKzrUV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BLShzrWN.js";import"./throttle-VBcNMDCY.js";import"./axisSelectors-CuFbzFkp.js";import"./d3-scale-CCNti6RY.js";import"./CartesianAxis-BUQjH22T.js";import"./Layer-D9n5kKSs.js";import"./types-CiZDyVvS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsR53_S1.js";import"./index-CyqgVO8h.js";import"./index-BWY5Ai4-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CdEOi8nf.js";import"./index-D7sJrNgb.js";import"./fillDefinitions-CJlHmTcA.js";import"./CartesianChart-B8ylmrv_.js";import"./chartDataContext-l1L_LONz.js";import"./CategoricalChart-Bed811or.js";import"./Symbols-Dffl-I8q.js";import"./symbol-BsRW9Z6s.js";import"./path-DyVhHtw_.js";import"./useElementOffset-lqrBTYbX.js";import"./uniqBy-4s5Lfnt3.js";import"./iteratee-DHow2gXt.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-C2eRsswd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkLsbkp1.js";import"./useAnimationId-DSFmvkxj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DHVoZWQX.js";import"./tooltipContext-DS1SAGX9.js";import"./ErrorBarContext-D4CjkMQU.js";import"./activeStyles-Ccn_YinS.js";import"./SetGraphicalItem-CyD7jeIx.js";import"./getZIndexFromUnknown-BC02AnFj.js";import"./useEffectiveDataKey-jt0Z3g1O.js";import"./omit-DQkWH6xG.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
