import{R as e}from"./iframe-Bah9cDPf.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CUlouZeJ.js";import{R as h}from"./zIndexSlice-D6NwopLq.js";import{C as g}from"./ComposedChart-082vf-Dq.js";import{L as x}from"./Line-CdLhYhot.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BLITEdPK.js";import{T as V}from"./Tooltip-DYnVHdZI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Bt_lCqiI.js";import"./Layer-CD06LZri.js";import"./resolveDefaultProps-zC5o00WN.js";import"./Text-Ct-0y4jN.js";import"./ZIndexLayer-DdBSJIQM.js";import"./index-D6Fwvcda.js";import"./index-CvqzOiHn.js";import"./Label-BLtLxFh_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CEDelL9A.js";import"./throttle-BjlLZ4wO.js";import"./types-C6A66RfZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiPoI8vI.js";import"./index-FRb1AgAe.js";import"./index-CadkBFdQ.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BJF83DO6.js";import"./RechartsWrapper-CuqmEJPa.js";import"./index-flr5alNa.js";import"./fillDefinitions-BbHKQE2Y.js";import"./CartesianChart-DT-YIr9t.js";import"./chartDataContext-9AmAFOH8.js";import"./CategoricalChart-DcONsU4c.js";import"./Curve-KDiJn0MP.js";import"./step-CoC1wfrs.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BkXi-SmE.js";import"./ActivePoints-CMlYxCeA.js";import"./Dot-OGnZYrwe.js";import"./activeStyles-C-zEEDQQ.js";import"./useAnimationId-DEYdhNFn.js";import"./Symbols-CAXKij6d.js";import"./symbol-BgjIZi1V.js";import"./ErrorBarContext-BtmuWUeb.js";import"./SetGraphicalItem-DSHrOFY_.js";import"./getRadiusAndStrokeWidthFromDot-DWUFIa-L.js";import"./ActiveShapeUtils-CHFZOTDo.js";import"./useEffectiveDataKey-cBqedM3V.js";import"./useElementOffset-Bd4rfpxM.js";import"./uniqBy-xNCP_Qij.js";import"./iteratee-C8Fc8Asa.js";import"./isArguments-yB-y1yaH.js";import"./Cross-iaCl0PL2.js";import"./Rectangle-C-T60wMT.js";import"./util-Dxo8gN5i.js";import"./Sector-CkDX9Lcx.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
