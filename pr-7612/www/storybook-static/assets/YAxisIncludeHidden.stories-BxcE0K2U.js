import{r as f,R as e}from"./iframe-CFlvYhwJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-HOrPhXMW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DsYga1t6.js";import{C as k}from"./ComposedChart-B5QMSZu4.js";import{X as K}from"./XAxis-BkEb723n.js";import{L as v}from"./Legend-Cf88ChVG.js";import{B as s}from"./Bar-BZ2Lpw7x.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-QMoyFNov.js";import"./Text-DN7KrSut.js";import"./resolveDefaultProps-D1HAFajw.js";import"./DOMUtils-D9HWXXxc.js";import"./isWellBehavedNumber-CZKybQSl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CvEqpirx.js";import"./index-CK40W1ET.js";import"./index-CMfIljZ8.js";import"./RechartsWrapper-CRpfhqml.js";import"./index-CkY-i2Tp.js";import"./index-BETjCkd5.js";import"./throttle-DGHHBzas.js";import"./renderedTicksSlice-1CrcAe52.js";import"./axisSelectors-CI91Gt8x.js";import"./d3-scale-dVjou3RT.js";import"./CartesianAxis-CTp7B_-s.js";import"./Layer-CW0ll6KY.js";import"./types-CdMLkiLP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DehnkZN_.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BaNzafos.js";import"./chartDataContext-C13UfWCq.js";import"./CategoricalChart-DdrlD6Qo.js";import"./Symbols-DCbX0jj1.js";import"./symbol-UZk0eoHb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CBycoxNA.js";import"./uniqBy-CdjrOVMj.js";import"./iteratee-gRbCXcE0.js";import"./tooltipContext-B8aLYTur.js";import"./AnimatedItems-DsKEiEFE.js";import"./useAnimationId-C-XOTnuE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-gwz3zD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CfzUyvN7.js";import"./RegisterGraphicalItemId-Dt1qkWl-.js";import"./ErrorBarContext-trjmp7P9.js";import"./GraphicalItemClipPath-CRnvGLDA.js";import"./SetGraphicalItem-BR7YSlkQ.js";import"./getZIndexFromUnknown-C0zjfmJC.js";import"./graphicalItemSelectors-kYvFKoKv.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
