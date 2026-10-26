import{R as e}from"./iframe-BofWz4pi.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-7mtD4Kk1.js";import{R as h}from"./zIndexSlice-DPHCingP.js";import{C as g}from"./ComposedChart-D_3KSeQ5.js";import{L as x}from"./Line-B0vqUN1D.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BBiuonxv.js";import{T as V}from"./Tooltip-DHASBblv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DEogGjPj.js";import"./Layer-bLQQfVOZ.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./Text-Cod3bNx5.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./Label-CCUawDng.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./throttle-CD21hIR0.js";import"./dataEntryStyles-EsxEhXM1.js";import"./types-Da0w2MOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BlRUD72R.js";import"./RechartsWrapper-uhVYqXCO.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./Curve-CFeHUPSl.js";import"./step-A_Fv11J5.js";import"./path-DyVhHtw_.js";import"./activeStyles-B7UPTptH.js";import"./useAnimationId-CM0h2zlX.js";import"./ActivePoints-DgVnIIPK.js";import"./Dot-DoIuuVTb.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./ErrorBarContext-D5pMarzn.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getRadiusAndStrokeWidthFromDot-Py8UGwCM.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./useEffectiveDataKey-CF-diEWF.js";import"./useElementOffset-B4a6RQjs.js";import"./uniqBy-DiB2KEwv.js";import"./iteratee-CfR7qh40.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cj2oQu0f.js";import"./Rectangle-BNojMJrW.js";import"./util-Dxo8gN5i.js";import"./Sector-ma2Hi-5z.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
