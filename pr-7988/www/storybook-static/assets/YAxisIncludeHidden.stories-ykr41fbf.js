import{r as f,R as e}from"./iframe-mtYsn-79.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B8XavvDr.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-495T_9tR.js";import{C as k}from"./ComposedChart-CW7X5osA.js";import{X as K}from"./XAxis-DraxbeeJ.js";import{L as v}from"./Legend-QCiQ2MIV.js";import{B as a}from"./Bar-Db6YWXNe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-L2ne4D-Q.js";import"./Text-BJaxenL8.js";import"./resolveDefaultProps-Dv9djRbQ.js";import"./pageBackground-CdPwgquz.js";import"./isWellBehavedNumber-CUExMovG.js";import"./useId-DbxZMBee.js";import"./useBackwardsCompatibleTheme-C2I2obbb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C6VGe1nr.js";import"./index-D6LBQYE7.js";import"./index-DsrHO_6p.js";import"./axisSelectors-tcQjfxXW.js";import"./throttle-BhAErOUJ.js";import"./d3-scale-7ZjrAl0H.js";import"./CartesianAxis-BWxlG7ih.js";import"./Layer-K-lH1pk5.js";import"./types-Bj-sAee4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C9Id8AHg.js";import"./index-NJ5U5ys4.js";import"./index-BrIo2_bc.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Lhej2phZ.js";import"./index-UWH5XZiD.js";import"./CartesianChart-C2MjyFSz.js";import"./chartDataContext-BlAChyFk.js";import"./CategoricalChart-DBrto0w2.js";import"./Symbols-Dvpm4sds.js";import"./symbol-CTv1Pr73.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-V_Sy0W.js";import"./uniqBy-DeXUggee.js";import"./iteratee-CZHsmPrl.js";import"./activeStyles-BxgBaa2U.js";import"./useAnimationId-BOXwxaVr.js";import"./dataEntryStyles-CD4KrGW2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BVuVZbYm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXyzmERA.js";import"./tooltipContext-Dy0d23en.js";import"./ErrorBarContext-Ek123Dcx.js";import"./GraphicalItemClipPath-c13meIZR.js";import"./SetGraphicalItem-Cc0cHCgq.js";import"./getZIndexFromUnknown-BqcUYiqG.js";import"./useEffectiveDataKey-CmlhkQvR.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
