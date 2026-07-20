import{r as f,R as e}from"./iframe-CV15e7az.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BGgz64vm.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CjGsmEi1.js";import{C as k}from"./ComposedChart-BEyLsXgU.js";import{X as K}from"./XAxis-DLZMrQJA.js";import{L as v}from"./Legend-CDcIHQFX.js";import{B as s}from"./Bar-D-uDpkBF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C65u4Bt5.js";import"./Layer-D7-BURxK.js";import"./resolveDefaultProps-C-NTBoJu.js";import"./Text-DlLjmiQX.js";import"./DOMUtils-DvhMIjVB.js";import"./isWellBehavedNumber-ieBgpEor.js";import"./Label-CWZ2l2lA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D33L973J.js";import"./index-93JCPKbn.js";import"./index-CVAE3ToH.js";import"./types-CWD3xXR9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-fTbz0eeh.js";import"./throttle-CHzP70vu.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DDXDvVK3.js";import"./index-BoM1UPcR.js";import"./index-BBpab-Hd.js";import"./axisSelectors-CI8TiAbs.js";import"./d3-scale-BchuFtEx.js";import"./CartesianChart-CvIpxzyO.js";import"./chartDataContext-BjsNRzum.js";import"./CategoricalChart-Cjf4C7PM.js";import"./Symbols-Cnzawx9f.js";import"./symbol-D3b_j2Zz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYeD-QhL.js";import"./uniqBy-C1LhrqqD.js";import"./iteratee-OgcCVfTc.js";import"./tooltipContext-DGJzCTsW.js";import"./AnimatedItems-CwcBVWiQ.js";import"./useAnimationId-CAqTHHd1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bx-fAemw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4G9dWIO.js";import"./RegisterGraphicalItemId-CTyQ2SsK.js";import"./ErrorBarContext-DbIUjAn0.js";import"./GraphicalItemClipPath-Cho1rLIH.js";import"./SetGraphicalItem-BMbMD-I2.js";import"./getZIndexFromUnknown-BOHkLAoh.js";import"./graphicalItemSelectors-Dh0N2TsJ.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
