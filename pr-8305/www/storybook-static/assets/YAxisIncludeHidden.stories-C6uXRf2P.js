import{r as f,R as e}from"./iframe-rnrsK-Eh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CebqVQrE.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D3HmR0ZR.js";import{C as k}from"./ComposedChart-D54WX9hH.js";import{X as K}from"./XAxis-DcA-2yah.js";import{L as v}from"./Legend-DCAQZ-xN.js";import{B as a}from"./Bar-BUeCKdYR.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-b1TTGhvT.js";import"./get-CjriyByo.js";import"./Label-DJYYuUsE.js";import"./Text-WHgqMzAs.js";import"./ZIndexLayer-dsZ60IUc.js";import"./index-BSOAsjef.js";import"./index-D8r-4r4t.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B1h4eON8.js";import"./throttle-BHymO33n.js";import"./axisSelectors-CIZ-q5JG.js";import"./d3-scale-BaDfMMmk.js";import"./CartesianAxis-ZiuFLH_J.js";import"./Layer-D4ktbd_J.js";import"./types-CAJhQIqW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-3O1E6NtI.js";import"./index-BZjQac1j.js";import"./index-BcrgJFGN.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-tBuCuUXe.js";import"./index-BWQTU1nE.js";import"./fillDefinitions-ooWue1m4.js";import"./CartesianChart-CdGDQA5c.js";import"./chartDataContext-BaXmKLtm.js";import"./CategoricalChart-B0mb1tZK.js";import"./Symbols-CFUB5kvN.js";import"./symbol-B4eSOryt.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BnxZL8WN.js";import"./uniqBy-C0Cq__z-.js";import"./iteratee-CngnK0pj.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-DPy91L9k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-8OmFGHQb.js";import"./useAnimationId-COqzWo9S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O7QOH_04.js";import"./tooltipContext-DbU0ZZ86.js";import"./ErrorBarContext-YhaLsFzE.js";import"./activeStyles-9CDj_AEF.js";import"./SetGraphicalItem-Bhp-y0Ji.js";import"./getZIndexFromUnknown-CY1dy49c.js";import"./useEffectiveDataKey-DftwbdUx.js";import"./omit-Cn0MF7xB.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
