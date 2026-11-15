import{r as f,R as e}from"./iframe-Bs2Fwquo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BIq5zgoj.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-zNxU83Rq.js";import{C as k}from"./ComposedChart-BYL_ipm0.js";import{X as K}from"./XAxis-Da7a1LVz.js";import{L as v}from"./Legend-BdAsxtxW.js";import{B as a}from"./Bar-C7mnOt2T.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DziYhFsK.js";import"./Text-ggKHnocX.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./ZIndexLayer-C_DcULPk.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C5Qopf47.js";import"./throttle-CeO6b2ZD.js";import"./axisSelectors-DqQ1JIAI.js";import"./d3-scale-DLjk-fTH.js";import"./CartesianAxis-DRyjDMvy.js";import"./Layer-DSICE4z4.js";import"./types-BK-Q7FAz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-KgWNcN6T.js";import"./index-Czszie77.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-H7J0pkbh.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BK9Z9etj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bDkm_FXF.js";import"./useAnimationId-6uZicVw9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_relbt6.js";import"./tooltipContext-BWit-ARE.js";import"./ErrorBarContext-DQsjNYcx.js";import"./activeStyles-B-3paNFW.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getZIndexFromUnknown-BHesTKRk.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./omit-CByspQeK.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
