import{R as t}from"./iframe-GELhAUTo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CwCyZywx.js";import{R as l}from"./zIndexSlice-ClN2s-1U.js";import{C as x}from"./ComposedChart-CdCgkykE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-KUjk1Seu.js";import{L as a}from"./Line-5fxqjKcQ.js";import{X as c}from"./XAxis-Y85LtPOX.js";import{T as g}from"./Tooltip-D7C9XChe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C2iZYvRC.js";import"./Layer-1dFGvAkG.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./Label-D2gt0uaB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./types-CDH6nNS8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./throttle-DU3kigO2.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./tooltipContext-Cansh_dN.js";import"./AnimatedItems-D0mvcaGm.js";import"./useAnimationId-Cjs3Y5s0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1qGnE1A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./ErrorBarContext-Cc-Db4VE.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getZIndexFromUnknown-BtPaCaU9.js";import"./graphicalItemSelectors-Djhj5DPh.js";import"./Curve-C2-sTxrm.js";import"./step-DYVQ7D-O.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D0W1le7m.js";import"./Dot-Dfp7LnYV.js";import"./getRadiusAndStrokeWidthFromDot-DdGOUs2v.js";import"./useElementOffset-CSI1lZ64.js";import"./uniqBy-UEtfjGe3.js";import"./iteratee-HaGkk_IB.js";import"./Cross-Crmvd5H-.js";import"./Sector-BjEDjMKc.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
