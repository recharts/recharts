import{R as e}from"./iframe-DQVzMSYD.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-EcPa3Cb-.js";import{R as h}from"./zIndexSlice-COaPk7HG.js";import{C as g}from"./ComposedChart-C_Pl0aog.js";import{L as x}from"./Line-D2xiXoDa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CB3Nn2aV.js";import{T as V}from"./Tooltip-DY53DxeQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D4euaSSo.js";import"./Layer-Bj9bz4HQ.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./Text-CPLLX1IN.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./Label-D0zJX0d_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./throttle-RO9RTr3r.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./types-DP1nwDJM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-D2aZ2Nk7.js";import"./RechartsWrapper-C-LDIUUV.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./Curve-Bt3n70L8.js";import"./step-BQC9MPym.js";import"./path-DyVhHtw_.js";import"./activeStyles-BOapb_qi.js";import"./useAnimationId-BChg9XFS.js";import"./ActivePoints-rQZSXr73.js";import"./Dot-BkzLITlZ.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getRadiusAndStrokeWidthFromDot-C00hbLzP.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./useElementOffset-DyUzreY7.js";import"./uniqBy-BJn9ALDR.js";import"./iteratee-BPCNyx3w.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DyQZyHKO.js";import"./Rectangle-BkBeu2DV.js";import"./util-Dxo8gN5i.js";import"./Sector-ssOD9QbL.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
