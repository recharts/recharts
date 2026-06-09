import{R as t}from"./iframe-AkXMTiN1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-oXwNoYI-.js";import{R as l}from"./zIndexSlice-D2IbpIG9.js";import{C as x}from"./ComposedChart-CbcedsfM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DvESP6Ng.js";import{L as a}from"./Line-bSxVFdvW.js";import{X as c}from"./XAxis-pJLX02b7.js";import{T as g}from"./Tooltip-Dz6gQDMj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-hfJl8nDX.js";import"./CartesianAxis-nu48EpeM.js";import"./Layer-BbfEqMjd.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./Label-yi6vcZhu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./types-eY1LNeEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./immer-CGdqiLEl.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./index-cd3KTdjN.js";import"./axisSelectors-DNRIweDw.js";import"./d3-scale-uKys2Prv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./tooltipContext-0DmM3p0T.js";import"./AnimatedItems-DMUwO7tR.js";import"./useAnimationId-DnVrzYZK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1CG4rUt.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./ErrorBarContext-DPoGAGab.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getZIndexFromUnknown-DtWHaj5i.js";import"./graphicalItemSelectors-B1qTcvDF.js";import"./Curve-DjnTfF-s.js";import"./step-Du2Dxzc7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CsE5DRnu.js";import"./Dot-CXwe2hvn.js";import"./getRadiusAndStrokeWidthFromDot-CXAjyQPs.js";import"./useElementOffset-B-pwvrhw.js";import"./uniqBy-BLFid8pB.js";import"./iteratee-oc6mos4-.js";import"./Cross-BfpsE6cl.js";import"./Sector-CKPBKjPP.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
