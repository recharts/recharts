import{r as f,R as e}from"./iframe-DnRkZCcZ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-CL5uWkoX.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DwWcIzrA.js";import{C as k}from"./ComposedChart-DAKOEFgJ.js";import{X as K}from"./XAxis-DPYXDMnu.js";import{L as v}from"./Legend-CA1OSly7.js";import{B as a}from"./Bar-D-jxt40_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DX2yrrpT.js";import"./Text-CdYpRkXo.js";import"./resolveDefaultProps-CKyaaGET.js";import"./ZIndexLayer-Cfgieq6O.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./throttle-bNdHLYfF.js";import"./axisSelectors-BG0FGZa0.js";import"./d3-scale-DjImCkyz.js";import"./CartesianAxis-CI0fZc9H.js";import"./Layer-ziHQUSdD.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B9w9bgII.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DMMTuYam.js";import"./uniqBy-DI2IzLG0.js";import"./iteratee-guzWnx9p.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-BgjT13Al.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EcRxuzMl.js";import"./useAnimationId-p0AfOAw0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./tooltipContext-BZHxRJ23.js";import"./ErrorBarContext-DvYBBAjF.js";import"./activeStyles-DRi4KJX5.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./getZIndexFromUnknown-Bisk8cmQ.js";import"./useEffectiveDataKey-BIuaq2EX.js";import"./omit-ZFBqXXNM.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
