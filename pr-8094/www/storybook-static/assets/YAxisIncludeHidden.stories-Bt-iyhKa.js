import{r as f,R as e}from"./iframe-DsuaRm2b.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-dn2GRGzH.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BHCK5tg8.js";import{C as k}from"./ComposedChart-C07yVNqj.js";import{X as K}from"./XAxis-DLqBMq0Q.js";import{L as v}from"./Legend-CfNgZIbH.js";import{B as a}from"./Bar-rZla8cdr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bg_SjTDz.js";import"./Text-7KEzSR95.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./throttle-CuCThFR3.js";import"./dataEntryStyles-CVVg9ITz.js";import"./axisSelectors-CXh7ZK0v.js";import"./d3-scale-D1FvEoQ3.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B7rLRibb.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BH16anoB.js";import"./uniqBy-BvBJ9JSl.js";import"./iteratee-D6J9B8SK.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-B1g8Cfod.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dz3Crc0K.js";import"./useAnimationId-BDMFeBiK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./tooltipContext-DDBQkYgW.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./activeStyles-BEbyAFUN.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getZIndexFromUnknown-CpRDmSsj.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./omit-CmNACTB-.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
