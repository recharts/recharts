import{r as f,R as e}from"./iframe-DU9JCgt3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-BhPAk-qT.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CxGcNVtb.js";import{C as k}from"./ComposedChart-CdeuUBYe.js";import{X as K}from"./XAxis-aQms9ffh.js";import{L as v}from"./Legend-B5xGGAYm.js";import{B as a}from"./Bar-BJWwBkYN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-TtbmFLuu.js";import"./Text-CxPCVLsv.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./ZIndexLayer-DyKyG2im.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./throttle-BSvWgvBy.js";import"./axisSelectors-Ba1wHviL.js";import"./d3-scale-D71t0tOP.js";import"./CartesianAxis-CbM1zHQj.js";import"./Layer-8TmRCycn.js";import"./types-BRIT5d70.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-EGU-JwYV.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./path-BBMZd4YL.js";import"./useElementOffset-n2MkMml8.js";import"./uniqBy-y429opov.js";import"./iteratee-Hdf7I3vo.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BKp-1fzi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cr7srdQH.js";import"./useAnimationId-CMFzH8KV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./tooltipContext-xMvvQpbu.js";import"./ErrorBarContext-Cf3Qd7xR.js";import"./activeStyles-DjdKzu9Y.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./getZIndexFromUnknown-CeoGTCvF.js";import"./useEffectiveDataKey-9kbdNBk-.js";import"./omit-DVlhLFfn.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
